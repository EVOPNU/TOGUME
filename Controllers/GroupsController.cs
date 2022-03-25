﻿using Microsoft.AspNetCore.Mvc;
using Groups.Models;
using Microsoft.AspNetCore.Http;

namespace Groups.Controllers
{
    [Route("api/v1/[controller]")]
    public class GroupsController : ControllerBase
    {

        [HttpGet("cre")]
        public IActionResult Cre()
        {
            // int id = int.Parse(Request.Headers["ID"]);
            int id = 4;
            // Console.WriteLine(id);
            return Ok(id);
        }
        //[HttpGet("creee")]
        //public IActionResult Creee()
        //{
        //    var controller = new GroupsController();
        //    // int id = int.Parse(Request.Headers["ID"]);
        //    var inn = controller.Cre() as NotFoundResult;


        //   // var newBa = inn.StatusCode;
        //    Console.WriteLine(inn);
        //    return Ok(inn);
        //}


        [HttpPost("create")] //создание группы
        public IActionResult Create([FromBody] Groupss model)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var nn in db.custom_groups.ToList())
                {
                    if (nn.name == model.name)
                    {
                        return NotFound();
                    }
                }
                Groupss group = Addgroup(model);
                if (group != null)
                {

                    InGroups inn = new InGroups { group_id = group.id, user_id = model.id, role = "admin" };
                    db.in_groups.Add(inn);
                    db.SaveChanges();
                    return Ok(group);


                }
            }
            return BadRequest();

        }
        private Groupss Addgroup(Groupss model)
        {
            if (model.access == "close")
            {
                using GroupsContext db = new GroupsContext();
                {
                    Groupss group = new Groupss { name = model.name, description = model.description, access = "close", amount = model.amount };
                    db.custom_groups.Add(group);
                    db.SaveChanges();

                    return group;
                }
            } else if (model.access == "open")
            {
                using GroupsContext db = new GroupsContext();
                {
                    Groupss group = new Groupss { name = model.name, description = model.description, access = "open", amount = model.amount };
                    db.custom_groups.Add(group);
                    db.SaveChanges();

                    return group;
                }
            }
            return null;


        }
        [HttpPost("update/{sender}")] //обновление данных группы (название,описание), может админ/полуадмин
        public IActionResult Update([FromBody] Groupss model, int sender)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var lel in db.in_groups.ToList())
                {
                    if (lel.user_id == sender && lel.group_id == model.id && (lel.role == "admin" || lel.role == "poladmina"))
                    {

                        foreach (var lol in db.custom_groups.ToList())
                        {
                            if (lol.id == model.id)
                            {
                                lol.name = model.name;
                                lol.description = model.description;
                                lol.access = model.access;
                                db.custom_groups.Update(lol);
                                db.SaveChanges();
                                return Ok(lol);
                            }
                        }
                    }
                }
                return BadRequest();
            }
        }
        [HttpGet("add/{access}/{groupId}/{userId}")] // добавление юзера в группу ( если открытая, юзер сам вступает. Если закрытая, то
                                                              // админ группы принимает, при условии кинутой заявки от юзера в группу
        public IActionResult Add(string access, int userId, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                if (access == "open")
                {
                    foreach (var chel in db.in_groups.ToList())
                    {
                        if (chel.user_id == userId && chel.group_id == groupId)
                        {
                            return BadRequest();
                        }
                    }
                    foreach (var lel in db.custom_groups.ToList())
                    {
                        if (lel.id == groupId)
                        {
                            InGroups inn = Addd(userId, groupId);
                            lel.amount += 1;
                            db.custom_groups.Update(lel);
                            db.SaveChanges();
                            return Ok(inn);
                        }
                    }
                }
                else if (access == "close")
                {
                    foreach (var chel in db.in_groups.ToList())
                    {
                        if (chel.user_id == userId && chel.group_id == groupId)
                        {
                            return BadRequest();
                        }
                    }                  
                            foreach (var inv in db.invitations.ToList())
                            {
                                if(inv.user_id == userId && inv.group_id == groupId)
                                {
                                    db.invitations.Remove(inv);
                                    db.SaveChanges();
                                    foreach (var lel in db.custom_groups.ToList())
                                    {
                                        if (lel.id == groupId)
                                        {
                                            InGroups inn = Addd(userId, groupId);
                                            lel.amount += 1;
                                            db.custom_groups.Update(lel);
                                            db.SaveChanges();
                                            return Ok(inn);
                                        }
                                    }
                                }
                            }                                            
                }                
                return BadRequest();
            }
        }
        private InGroups Addd(int userId, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                InGroups inn = new InGroups { group_id = groupId, user_id = userId, role = "user" };
                db.in_groups.Add(inn);
                db.SaveChanges();
                return inn;
            }
        }

        [HttpGet("req/{groupId}/{userId}")] // заявка на вступление в группу
        public IActionResult Req(int userId, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                Invitations inv = new Invitations { group_id = groupId, user_id = userId};
                db.invitations.Add(inv);
                db.SaveChanges();
                return Ok();

            }
        }

        [HttpGet("invgr/{groupId}/{sender}")] // заявки на вступление в группу, могут смотреть только админы группы
        public IActionResult invgr(int sender, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                List<Invitations> invi = new List<Invitations>();
                foreach(var perk in db.in_groups.ToList())
                {
                    if (perk.group_id == groupId && perk.user_id == sender && (perk.role == "admin" || perk.role == "poladmina"))
                    {
                        foreach (var inv in db.invitations.ToList())
                        {
                            if (inv.group_id == groupId)
                            {
                                invi.Add(inv);
                            }
                        }
                    }
                }
                return Ok(invi);               
            }
        }

        [HttpGet("invus/{userId}")] //все заявки юзера на вступление
        public IActionResult invus(int userId)
        {
            using GroupsContext db = new GroupsContext();
            {
                List<Invitations> invi = new List<Invitations>();
                foreach(var inv in db.invitations.ToList())
                {
                    if (inv.user_id == userId)
                    {
                        invi.Add(inv);
                      
                    }
                }
                return Ok(invi);
            }
        }

        [HttpGet("not/{groupId}/{userId}")] // удаление заявки
        public IActionResult not(int userId, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var not in db.invitations.ToList())
                {
                    if (not.user_id == userId && not.group_id == groupId)
                    {
                        db.invitations.Remove(not);
                        db.SaveChanges();
                        return Ok();
                    }
                }
                return BadRequest();
            }
        }

        [HttpGet("right/{groupId}/{userId}/{sender}")] // присваивание полуадминки юзеру в группе
        public IActionResult Right(int userId, int groupId, int sender)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var perk in db.in_groups.ToList())
                {
                    if (perk.group_id == groupId && perk.user_id == sender && perk.role == "admin")
                    {
                        foreach (var right in db.in_groups.ToList())
                        {
                            if (right.user_id == userId && right.group_id == groupId && right.role == "user")
                            {
                                right.role = "poladmina";
                                db.in_groups.Update(right);
                                db.SaveChanges();
                                return Ok();
                            }
                        }
                    }
                }
                return BadRequest();
            }

        }

        [HttpGet("delete/{groupId}/{userId}/{sender}")] // удаление/выход юзера из группы ( удалять из группы может только админ группы, если сам админ
                                                        // хочет выпилиться, он передает админку группы полуадмину)
        public IActionResult Delete(int userId, int groupId, int sender)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var perk in db.in_groups.ToList())
                {
                    if (perk.group_id == groupId && perk.user_id == sender && perk.role == "admin")
                    {
                        foreach (var gr in db.in_groups.ToList())
                        {
                            if (gr.user_id == userId && gr.group_id == groupId && gr.role == "admin")
                            {
                                foreach (var amount in db.custom_groups.ToList())
                                {
                                    if (amount.amount == 1 && amount.id == groupId)
                                    {
                                        db.custom_groups.Remove(amount);
                                        db.SaveChanges();
                                        db.in_groups.Remove(gr);
                                        db.SaveChanges();
                                        return Ok();
                                    }
                                }
                                db.in_groups.Remove(gr);
                                db.SaveChanges();
                                bool ttt = false;
                                foreach (var pol in db.in_groups.ToList())
                                {
                                    if (pol.role == "poladmina" && pol.group_id == groupId)
                                    {
                                        pol.role = "admin";
                                        db.in_groups.Update(pol);
                                        db.SaveChanges();
                                        ttt = true;
                                        break;
                                    }
                                }
                                if (ttt == false)
                                {
                                    foreach (var pol in db.in_groups.ToList())
                                    {
                                        if (pol.role == "user" && pol.group_id == groupId)
                                        {
                                            pol.role = "admin";
                                            db.in_groups.Update(pol);
                                            db.SaveChanges();
                                            break;
                                        }
                                    }
                                }
                               
                                foreach (var count in db.custom_groups.ToList())
                                {
                                    if (count.id == groupId)
                                    {
                                        count.amount += -1;
                                        db.custom_groups.Update(count);
                                        db.SaveChanges();
                                        return Ok();
                                    }
                                }
                            }
                            else if (gr.user_id == userId && gr.group_id == groupId && (gr.role == "user" || gr.role == "poladmina"))
                            {
                                db.in_groups.Remove(gr);
                                db.SaveChanges();
                                foreach (var count in db.custom_groups.ToList())
                                {
                                    if (count.id == groupId)
                                    {
                                        count.amount += -1;
                                        db.custom_groups.Update(count);
                                        db.SaveChanges();
                                        return Ok();
                                    }
                                }
                            }
                        }
                    }
                    else if (perk.group_id == groupId && perk.user_id == sender && (perk.role == "user" || perk.role == "poladmina"))
                    {
                        
                            db.in_groups.Remove(perk);
                            db.SaveChanges();
                            foreach (var count in db.custom_groups.ToList())
                            {
                                if (count.id == groupId)
                                {
                                    count.amount += -1;
                                    db.custom_groups.Update(count);
                                    db.SaveChanges();
                                    return Ok();
                                }
                            }
                        
                    }

                }
            }
            return NotFound();           
        }
            
            [HttpGet("exterminatus/{groupId}/{sender}")] // удаление группы со всеми участниками, удалять может только админ
            public IActionResult Exterminatus(int sender, int groupId)
            {
                using GroupsContext db = new GroupsContext();
                {
                    foreach (var chel in db.in_groups.ToList())
                    {
                        if (chel.user_id == sender && chel.group_id == groupId && chel.role == "admin")
                        {
                            foreach (var group in db.custom_groups.ToList())
                            {
                                if (group.id == groupId)
                                {
                                    db.custom_groups.Remove(group);
                                    db.SaveChanges();
                                    foreach (var cheliki in db.in_groups.ToList())
                                    {
                                        if (cheliki.group_id == groupId)
                                        {
                                            db.in_groups.Remove(cheliki);
                                            db.SaveChanges();
                                        }
                                    }
                                    return Ok();
                                }
                            }
                        }
                    }
                    return NotFound();
                }
            }
            [HttpGet("gr/{groupId}")] // данные какой-то группы
            public IActionResult Get(int groupId)
            {
                using GroupsContext db = new GroupsContext();
                {
                    foreach (var group in db.custom_groups)
                    {
                        if (group.id == groupId)
                        {
                            return Ok(group);
                        }
                    }
                    return NotFound();
                }
            }
            [HttpGet("us/{userId}")] // все группы, в которых состоит юзер
            public IActionResult Getete(int userId)
            {
                using GroupsContext db = new GroupsContext();
                {
                    List<Groupss> groups = new List<Groupss>();
                    foreach (var chel in db.in_groups.ToList())
                    {
                        if (chel.user_id == userId)
                        {
                            foreach (var group in db.custom_groups.ToList())
                            {
                                if (chel.group_id.Equals(group.id))
                                {
                                    groups.Add(group);
                                }
                            }
                        }
                    }
                    if(groups.Count > 0)
                    {
                    return Ok(groups);
                    }
                    return BadRequest();
                }
            }
        [HttpGet("ingroup/{groupId}")] // все участники какой-то группы
        public IActionResult Ingroup(int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                List<InGroups> gro = new List<InGroups>(); 
                foreach (var inn in db.in_groups.ToList())
                {
                    if (inn.group_id == groupId)
                    {
                        gro.Add(inn);
                    }
                }
                if (gro.Count > 0)
                {
                    return Ok(gro);
                }
                return BadRequest();
            }
        }
        [HttpGet("allgroups")] // все группы
        public IActionResult Allgroups()
        {
            using GroupsContext db = new GroupsContext();
            {
                List<Groupss> gro = new List<Groupss>();
                foreach (var all in db.custom_groups.ToList())
                {
                    gro.Add(all);
                }
                if (gro.Count > 0)
                {
                    return Ok(gro);
                }
                return BadRequest();
            }
        }

        [HttpPost("Yura")]
        public IActionResult Yura([FromBody] News news)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var ne in db.in_groups.ToList())
                {
                    if(news.user_delete_id == ne.user_id && news.group_id == ne.group_id && (ne.role == "admin" || ne.role == "poladmina"))
                    {
                        return Ok();
                    }
                }
                return NotFound();
            }
        }
     }
}

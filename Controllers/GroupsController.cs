using Microsoft.AspNetCore.Mvc;
using Groups.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Groups.Controllers
{
    [Route("[controller]")]
    public class GroupsController : ControllerBase
    {

        [HttpPost("create")]
        public IActionResult Create([FromBody] Groupss model)
        {
            Groupss group = Addgroup(model);
            using GroupsContext db = new GroupsContext();
            {
                InGroups inn = new InGroups { group_id = group.id, user_id = model.id, role = "admin" };
                db.in_groups.Add(inn);
                db.SaveChanges();
                return Ok(group);
               
            }           
        }
        private Groupss Addgroup(Groupss model)
        {
            using GroupsContext db = new GroupsContext();
            {
                Groupss group = new Groupss { name = model.name, description = model.description};
                db.groups.Add(group);
                db.SaveChanges();

                return group;
            }
        }
        [HttpPost("update/{userId}")]
        public IActionResult Update([FromBody] Groupss model, int userId)
        {           
            using GroupsContext db = new GroupsContext();
            {           
                    foreach (var lel in db.in_groups.ToList())
                    {
                    if (lel.user_id == userId && lel.role == "admin" && lel.group_id == model.id)
                    {
                        
                            foreach (var lol in db.groups.ToList())
                            {
                                if (lol.id == model.id)
                                {
                                    lol.name = model.name;
                                    lol.description = model.description;
                                    db.groups.Update(lol);
                                    db.SaveChanges();
                                    return Ok(lol);
                                }
                            }                       
                    }
                    }             
                return BadRequest();
            }
        }
        [HttpGet("add/{groupId}/{userId}")]
        public IActionResult Add(int userId, int groupId)
        {           
            using GroupsContext db = new GroupsContext();
            {
                foreach (var chel in db.in_groups.ToList())
                {
                    if (chel.user_id == userId && chel.group_id == groupId)
                    {
                        return BadRequest();
                    }
                }
                InGroups inn = new InGroups { group_id = groupId, user_id = userId, role = "user" };
                db.in_groups.Add(inn);
                db.SaveChanges();
                return Ok(inn);

            }
        }
        [HttpGet("delete/{groupId}/{userId}")]
        public IActionResult Delete(int userId, int groupId)
        {          
            using GroupsContext db = new GroupsContext();
            {
                foreach (var group in db.in_groups.ToList())
                {
                    if (group.user_id == userId && group.group_id == groupId)
                    {
                        db.in_groups.Remove(group);
                        db.SaveChanges();
                        return Ok();
                    }
                }
                return NotFound();
            }
        }
        [HttpGet("exterminatus/{groupId}/{userId}")]
        public IActionResult Exterminatus(int userId, int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var chel in db.in_groups.ToList())
                {
                    if (chel.user_id == userId && chel.group_id == groupId && chel.role == "admin")
                    {
                        foreach (var group in db.groups.ToList())
                        {
                            if (group.id == groupId)
                            {
                                db.groups.Remove(group);
                                db.SaveChanges();
                                foreach (var cheliki in db.in_groups.ToList())
                                {
                                    if ( cheliki.group_id == groupId)
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
        [HttpGet("gr/{groupId}")]
        public IActionResult Get(int groupId)
        {
            using GroupsContext db = new GroupsContext();
            {
                foreach (var group in db.groups)
                {
                    if (group.id == groupId)
                    {                        
                        return Ok(group);
                    }
                }
                return NotFound();
            }
        }
        [HttpGet("us/{userId}")]
        public IActionResult Getete(int userId)
        {
            using GroupsContext db = new GroupsContext();
            {
                List<Groupss> groups = new List<Groupss>();
                foreach (var chel in db.in_groups.ToList())
                {
                    if (chel.user_id == userId)
                    {
                        foreach(var group in db.groups.ToList())
                        {
                            if (chel.group_id.Equals(group.id))
                            {
                                groups.Add(group);
                            }
                        }                       
                    }
                }
                return Ok(groups);
            }
        }
    }
}

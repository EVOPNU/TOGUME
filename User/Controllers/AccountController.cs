
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User.Models;
using System.Net.Http.Headers;
using System.Text;
using System.Security.Cryptography;

namespace User.Controllers
{
    [Route("api/v1/user/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {



        //проверять для каждого

        [Route("change/password")]
        [HttpPut]

        public IActionResult ChangePassword([FromBody] JChangePassword model)
        {
            Console.WriteLine("Change password...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id && l.password == GetHashString(model.oldPassword))
                            {
                                l.password = GetHashString(model.newPassword);
                                db.SaveChanges();
                                Console.WriteLine("Password change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else {
                    Console.WriteLine("id!=idchange");
                    return BadRequest(); }
            }
            Console.WriteLine("Usern don't exist");     
            return BadRequest();

        }

        [Route("change/firstname")]
        [HttpPut]

        public IActionResult ChangeFirstName([FromBody] JChangeFirstName model)
        {
            Console.WriteLine("Change FirstName...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id )
                            {
                                l.firstName = model.newFirstName;
                                db.SaveChanges();
                                Console.WriteLine("FirstName change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        [Route("change/lastname")]
        [HttpPut]

        public IActionResult ChangeLastName([FromBody] JChangeLastName model)
        {
            Console.WriteLine("Change LastName...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.lastName = model.newLastName;
                                db.SaveChanges();
                                Console.WriteLine("LastName change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        [Route("change/thirdname")]
        [HttpPut]

        public IActionResult ChangeThirdName([FromBody] JChangeThirdName model)
        {
            Console.WriteLine("Change ThirdName...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.thirdName = model.newThirdName;
                                db.SaveChanges();
                                Console.WriteLine("ThirdName change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        [Route("change/birthday")]
        [HttpPut]

        public IActionResult ChangeBirthDay([FromBody] JChangeBirthDay model)
        {
            Console.WriteLine("Change BirthDay...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.birthDay = model.newBirthDay;
                                db.SaveChanges();
                                Console.WriteLine("BirthDay change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }

        [Route("change/groupuniversity")]
        [HttpPut]

        public IActionResult ChangeGroupUniversity([FromBody] JChangeGroupUniversity model)
        {
            Console.WriteLine("Change GroupUniversity...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.groupUniversity = model.newGroupUniversity;
                                db.SaveChanges();
                                Console.WriteLine("GroupUniversity change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        
        [Route("change/changefakulty")]
        [HttpPut]
        public IActionResult ChangeFakulty([FromBody] JChangeFakulty model)
        {
            Console.WriteLine("Change Fakulty...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.fakulty = model.newFakulty;
                                db.SaveChanges();
                                Console.WriteLine("Fakulty change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        [Route("change/nickname")]
        [HttpPut]
        public IActionResult ChangeNickName([FromBody] JChangeNickName model)
        {
            Console.WriteLine("Change NickName...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.nickName = model.newNickName;
                                db.SaveChanges();
                                Console.WriteLine("NickName change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }

        [Route("change/statusinprofile")]
        [HttpPut]
        public IActionResult ChangeStatusProfile([FromBody] JChangeStatusProfile model)
        {
            Console.WriteLine("Change StatusProfile...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.statusInProfile = model.newStatusProfile;
                                db.SaveChanges();
                                Console.WriteLine("StatusProfile change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }

        [Route("change/mainphoto")]
        [HttpPut]
        public IActionResult ChangeMainPhoto([FromBody] JChangeMainPhoto model)
        {
            Console.WriteLine("Change MainPhoto...");

            if (model != null)
            {
                int id = Convert.ToInt32(Request.Headers["Id"].ToString());
                if (id == model.id)
                {
                    using ApplicationContext db = new ApplicationContext();
                    {

                        foreach (var l in db.account.ToList())
                        {
                            if (l.id == model.id)
                            {
                                l.mainPhoto = model.newMainPhoto;
                                db.SaveChanges();
                                Console.WriteLine("MainPhoto change successful");
                                return Ok();
                                //тестиииить
                            }
                        }

                    }
                }
                else
                {
                    Console.WriteLine("id!=idchange");
                    return BadRequest();
                }
            }
            Console.WriteLine("Usern don't exist");
            return BadRequest();

        }
        string GetHashString(string password)
        {
            //переводим строку в байт-массим
            byte[] bytes = Encoding.Unicode.GetBytes(password);

            //создаем объект для получения средст шифрования
            MD5CryptoServiceProvider CSP =
                new MD5CryptoServiceProvider();

            //вычисляем хеш-представление в байтах
            byte[] byteHash = CSP.ComputeHash(bytes);

            string hash = string.Empty;

            //формируем одну цельную строку из массива
            foreach (byte b in byteHash)
                hash += string.Format("{0:x2}", b);

            return hash;
        }


        //сделать запрос через хедеры айдишник
        [Route("")]
        [HttpGet("")]

        public IActionResult GetUserById()
        {
             int id = Convert.ToInt32(Request.Headers["Id"].ToString());
            Console.WriteLine("Scan bd...");
            using ApplicationContext db = new ApplicationContext();
            {
              
                foreach (var l in db.account.ToList())
                {
                    if(l.id == id)
                    {
                        Console.WriteLine("User find");
                        return Ok(l);
                    }

                }
            }
            Console.WriteLine("User dosen't find");
            return BadRequest();
        }
    } //айдишник в хедеры при валид
}

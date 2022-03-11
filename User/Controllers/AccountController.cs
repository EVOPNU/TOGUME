
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;
using Microsoft.AspNetCore.Authorization;

namespace SecurityT.Controllers
{
    //айдишник в хедеры при валид
    [Route("api/v1/[controller]")]
    [ApiController]

    public class AuthorizationController : ControllerBase
    {

        private readonly IOptions<AuthOptions> options;
        public AuthorizationController(IOptions<AuthOptions> options)
        {
            this.options = options;

        }
        [Route("")]
        [HttpGet("")]
        [Authorize]
        public IActionResult Valid()
        {
            Console.WriteLine("To Validation...");
            var jsonToken = new JwtSecurityTokenHandler().ReadToken(Request.Headers["Authorization"].ToString().Remove(0, 7));

            var tokenS = jsonToken as JwtSecurityToken;
            var jti = tokenS.Claims.First(claim => claim.Type == JwtRegisteredClaimNames.Sub).Value;

            Response.Headers.Add("Id", jti);
            Console.WriteLine("Validation method finished");
            return Ok(); //new { id = jti }
        }
        //[Route("Registration")]
        //[HttpPost]
        //public IActionResult Register([FromBody] JPreRegister model)
        //{
        //    Console.WriteLine("Registration method started");
        //    if (model != null && model.Password == model.SecondPassword)
        //    {
        //        using ApplicationContext db = new ApplicationContext();
        //        {
        //            foreach (var l in db.account.ToList())
        //            {
        //                if (l.email == model.Email)
        //                {
        //                    Console.WriteLine("User with this Email AlredyExist\nRegistration method finished");
        //                    return BadRequest("AlredyExist"); //400
        //                }
        //            }

        //            db.account.Add(new Account { email = model.Email, password = GetHashString(model.Password) });
        //            db.SaveChanges();

        //            Console.WriteLine("Registration successful\nRegistration method finished");
        //            return Ok();

        //        }

        //    }
        //    Console.WriteLine("Registration input = null or password!=secondpassword\nRegistration method finished");
        //    return BadRequest();
        //}



        [Route("Registration")]
        [HttpPost]
        public async Task<IActionResult> Register2([FromBody] JPreRegister model)
        {
            Console.WriteLine("Registration method started");
            if (model != null && model.Password == model.SecondPassword)
            {
                using ApplicationContext db = new ApplicationContext();
                {
                    foreach (var l in db.account.ToList())
                    {
                        if (l.email == model.Email)
                        {
                            Console.WriteLine("User with this Email AlredyExist\nRegistration method finished");
                            return BadRequest("AlredyExist"); //400
                        }
                    }
                    int codein = Random();
                    SendEmailAsync(model.Email, codein);
                    foreach (var l in db.code.ToList())
                    {
                        if(l.Email == model.Email)
                        {
                            db.code.Remove(l);
                            db.SaveChanges();
                        }
                    }

                        db.code.Add(new Code { Email = model.Email, code = codein , dateCreate = DateTime.Now});
                    // db.account.Add(new Account { email = model.Email, password = GetHashString(model.Password) });
                    db.SaveChanges();

                    Console.WriteLine("Registration code send successful\nRegistration method finished");
                    return Ok();

                }

            }
            Console.WriteLine("Registration input = null or password!=secondpassword\nRegistration method finished");
            return BadRequest();
        }



        private int Random()
        {
            Random rnd = new Random();
            return rnd.Next(1, 9);
        }


        [Route("Confrim")]
        [HttpPost]
        public IActionResult Register([FromBody] JRegisterWithCode model)
        {
            Console.WriteLine("Registration method started");
            if (model != null && model.Password == model.SecondPassword)
            {
                using ApplicationContext db = new ApplicationContext();
                {
                    bool exist = false;
                    foreach (var l in db.account.ToList())
                    {
                        if (l.email == model.Email)
                        {
                            Console.WriteLine("User with this Email AlredyExist\nRegistration method finished");
                            return BadRequest("AlredyExist"); //400
                        }
                    }
                    foreach (var c in db.code.ToList())
                    {

                       
                        if (c.Email == model.Email)
                        {
                            if (c.code == model.Code)
                            {
                                db.account.Add(new Account { email = model.Email, password = GetHashString(model.Password) });
                                db.code.Remove(c);
                                db.SaveChanges();
                                exist = true;
                                Console.WriteLine("Registration successful\nRegistration method finished");
                                return Ok();
                            }
                        }
                    }

                    if (!exist)
                    {
                        return BadRequest(new { code = "error" });
                    }
                  



                }

            }

            Console.WriteLine("Registration input = null or password!=secondpassword\nRegistration method finished");
            return BadRequest();
        }

        [Route("rg")]
        [HttpPost]
        public IActionResult Rg()
        {
            
                using ApplicationContext db = new ApplicationContext();
                {
                 if(db.code.FirstOrDefault(x => x.Email == "ma@mail.ru").code == 10)
                {
                    Console.WriteLine("Eeeeaaaaaa");
                };
                   // db.account.Add(new Account { email = "2020102@mail.ru", password = GetHashString("User"), dateTimeCreate = DateTime.Now }) ;
            // db.code.Add(new Code { Email = "ma@mail.ru", code = 12 });
              //  db.code.Add(new Code { Email = "ma@mail.ru", code = 13 });
                //db.code.Add(new Code { Email = "ma@mail.ru", code = 10 });
              // db.code.Add(new Code { Email = "ma@mail.ru", code = 11 });
               // db.code.Add(new Code { Email = "ma@mail.ru", code = 10 });
               // db.SaveChanges();

                Console.WriteLine("Registration successful\nRegistration method finished");
                                return Ok(db.code.LastOrDefault(x => x.Email == "ma@mail.ru").code == 10);
                           
                   

                    




                }

            

            Console.WriteLine("Registration input = null or password!=secondpassword\nRegistration method finished");
            return BadRequest();
        }







        private static async Task SendEmailAsync(string email, int code)
        {
            var builder = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json");
            var config = builder.Build();
            MailAddress from = new MailAddress(config["Mail:Adress"], "TOGUME");
            MailAddress to = new MailAddress(email);
            MailMessage m = new MailMessage(from, to);
            m.Subject = "Код подтверждения";
            m.Body = $" код , нет кот - {code}";
            SmtpClient smtp = new SmtpClient(config["Mail:Host"], 587);
            smtp.Credentials = new System.Net.NetworkCredential(config["Mail:Adress"], config["Mail:Password"]);
            smtp.EnableSsl = true;
            await smtp.SendMailAsync(m);
            Console.WriteLine("Письмо отправлено");
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



        [Route("Login")]
        [HttpPost]
        public IActionResult Login([FromBody] JLogin model)
        {
            Console.WriteLine("Login method start");
            var user = AuthenticateUser(model.Email, model.Password);

            if (user != null)
            {
                var token = GenerateJWT(user);
                Console.WriteLine("Login successful\n  Login method finished");
                return Ok(new { access_token = token });
                //generate jwt
            }
            Console.WriteLine("Login UnAuthorized\nLogin method finished");
            return Unauthorized();

        }

        private Account AuthenticateUser(string email, string password)
        {
            Console.WriteLine("Auntification...");
            using ApplicationContext db = new ApplicationContext();
            {
                foreach (var l in db.account.ToList())
                {
                    if (l.email == email && l.password == GetHashString(password))
                    {
                        Console.WriteLine("Auntification successful");
                        return l;
                    }
                }

            }
            Console.WriteLine("Auntification failed");
            return null;

        }

        private string GenerateJWT(Account user)
        {
            Console.WriteLine("Generating jwt...");
            //string role;
            //using ApplicationContext db = new ApplicationContext();
            //{
            //    role = db.account.FirstOrDefault(a => a.email == user.email).role;
            //}
            var authParams = options.Value;
            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentinals = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Email,user.email),
                new Claim(JwtRegisteredClaimNames.Sub,user.id.ToString()),
               // new Claim(ClaimsIdentity.DefaultRoleClaimType,"Admin"),
                //new Claim("role",role)
                //new Claim(JwtRegisteredClaimNames.Iss,authParams.Issure)
            };
            //foreach(var role in user.Role)
            //{
            //    claims.Add(new Claim("role",role.ToString()));

            //}

            var token = new JwtSecurityToken(authParams.Issure,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentinals);
            Console.WriteLine("Generating successful");
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}

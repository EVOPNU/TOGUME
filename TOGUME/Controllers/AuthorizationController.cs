using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace TOGUME.Controllers
{
    //айдишник в хедеры при валид
    [Route("api/v1/user/[controller]")]
    [ApiController]

    public class AuthorizationController : ControllerBase
    {

        private readonly IOptions<AuthOptions> options;
        public AuthorizationController(IOptions<AuthOptions> options)
        {
            this.options = options;

        }

        [Route("Registration")]
        [HttpPost]
        public IActionResult Register([FromBody] JRegister model)
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

                    db.account.Add(new Account { email = model.Email, password = GetHashString(model.Password) });
                    db.SaveChanges();
                    Console.WriteLine("Registration successful\nRegistration method finished");
                    return Ok();

                }

            }
            Console.WriteLine("Registration input = null or password!=secondpassword\nRegistration method finished");
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

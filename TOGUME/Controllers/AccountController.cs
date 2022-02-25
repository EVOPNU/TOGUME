using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;

namespace TOGUME.Controllers
{
    [Route("api/v1/user/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {




        [Route("")]
        [HttpGet("")]
        [Authorize]
        public IActionResult Valid()
        {
            Console.WriteLine("To Valid");
            // var stream = 
            //Console.WriteLine(header);
            //string jsonToken = header.Remove(0,7);
            // Console.WriteLine(stream);
            var jsonToken = new JwtSecurityTokenHandler().ReadToken(Request.Headers["Authorization"].ToString().Remove(0, 7));
            //  var jsonToken = handler.ReadToken(stream);
            var tokenS = jsonToken as JwtSecurityToken;
            var jti = tokenS.Claims.First(claim => claim.Type == JwtRegisteredClaimNames.Sub).Value;
           // Request.Headers.Add("Id", jti);
            Response.Headers.Add("Id", jti);
            //header.Add("Id", jti);
            return Ok(new { id = jti });
        }

    } //айдишник в хедеры при валид
}

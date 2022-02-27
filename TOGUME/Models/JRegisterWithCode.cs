using System.ComponentModel.DataAnnotations;

namespace TOGUME
{
    public class JRegisterWithCode
    {

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public string SecondPassword { get; set; }

        [Required]
        public int Code { get; set; }
    }
}

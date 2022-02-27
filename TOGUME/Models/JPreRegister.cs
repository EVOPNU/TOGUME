using System.ComponentModel.DataAnnotations;
namespace TOGUME
{
    public class JPreRegister
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public string SecondPassword { get; set; }
    }
}

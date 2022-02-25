using System.ComponentModel.DataAnnotations;

namespace TOGUME
{
    public class JLogin
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        //[Required]
        //public string FirstName { get; set; }

        //[Required]
        //public string LastName { get; set; }

        //[Required]
        //public string Patronymic { get; set; }
    }
}
    
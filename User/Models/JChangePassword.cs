using System.ComponentModel.DataAnnotations;

namespace User
{
    public class JChangePassword
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string oldPassword { get; set; }
        [Required]
        public string newPassword { get; set; }

    }
}

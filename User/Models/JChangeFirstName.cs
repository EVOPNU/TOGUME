using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeFirstName
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newFirstName { get; set; }
    }
}

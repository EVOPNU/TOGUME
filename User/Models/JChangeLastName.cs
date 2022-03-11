using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeLastName
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newLastName { get; set; }
    }
}

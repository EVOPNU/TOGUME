using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeStatusProfile
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newStatusProfile { get; set; }
    }
}

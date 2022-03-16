using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeMainPhoto
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newMainPhoto { get; set; }
    }
}

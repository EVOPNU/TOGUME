using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeGroupUniversity
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newGroupUniversity { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeFakulty
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newFakulty { get; set; }
    }
}

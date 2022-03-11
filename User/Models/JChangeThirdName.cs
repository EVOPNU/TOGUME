using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeThirdName
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newThirdName { get; set; }
    }
}

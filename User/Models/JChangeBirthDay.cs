using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeBirthDay
    {
        [Required]
        public int id { get; set; }
        [Required]
        public DateTime newBirthDay { get; set; }
    }
}

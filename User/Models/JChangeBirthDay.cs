using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeBirthDay
    {

        [Required]
        public DateTime newBirthDay { get; set; }
    }
}

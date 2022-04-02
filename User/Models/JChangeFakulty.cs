using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeFakulty
    {

        [Required]
        public string newFakulty { get; set; }
    }
}

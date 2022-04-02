using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeThirdName
    {
        [Required]
        public string newThirdName { get; set; }
    }
}

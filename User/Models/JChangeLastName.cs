using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeLastName
    {
        [Required]
        public string newLastName { get; set; }
    }
}

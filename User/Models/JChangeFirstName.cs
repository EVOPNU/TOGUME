using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeFirstName
    {

        [Required]
        public string newFirstName { get; set; }
    }
}

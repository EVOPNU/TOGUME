using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeStatusProfile
    {

        [Required]
        public string newStatusProfile { get; set; }
    }
}

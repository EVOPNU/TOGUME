using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeMainPhoto
    {
        [Required]
        public string newMainPhoto { get; set; }
    }
}

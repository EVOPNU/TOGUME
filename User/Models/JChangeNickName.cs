using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeNickName
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string newNickName { get; set; }
    }
}

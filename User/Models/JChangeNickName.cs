using System.ComponentModel.DataAnnotations;

namespace User.Models
{
    public class JChangeNickName
    {

        [Required]
        public string newNickName { get; set; }
    }
}

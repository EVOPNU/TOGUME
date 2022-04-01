using Microsoft.EntityFrameworkCore;
namespace Groups.Models
{
    public class InGroups
    {
       //   public int id { get; set; }
        
        public int public_id { get; set; }
      
        public int user_id { get; set; }
        public string? role { get; set; }
    }
}

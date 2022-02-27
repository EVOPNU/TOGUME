namespace Groups.Models
{
    public class InGroups
    {
        public int id { get; set; }
        public int group_id { get; set; }
        public int user_id { get; set; }
        public string? role { get; set; }
    }
}

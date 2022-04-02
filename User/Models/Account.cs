namespace User
{
    public class Account
    {

        public int id { get; set; }
        public string email{ get; set; }
        public string password { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? thirdName { get; set; }
        public DateTime birthDay { get; set; }
        public string? groupUniversity { get; set; }
        public string? faculty { get; set; }
        public string? nickName { get; set; }
        public string? statusInProfile { get; set; }

        public int? countOfFriends   { get; set; }
        public int? countOfFollowers { get; set; }
        public int? countOfPhoto { get; set; }
        public int? countOfPosts { get; set; }

        public string? mainPhoto { get; set; }

        public DateTime dt_create { get; set; }




    }

}

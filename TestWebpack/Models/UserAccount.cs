namespace MessageProject.Models
{
    public class UserAccount
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }    
    }

    public class ChangePassword
    {
     
        public required string CurrentPassword { get; set; }
        public required string NewPassword { get; set; }
    }
}

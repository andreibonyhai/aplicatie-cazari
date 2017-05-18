using System.ComponentModel.DataAnnotations;

namespace Angula2BaseStructure.Models.ViewModels.Auth
{
    public class RegisterCredentialsViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
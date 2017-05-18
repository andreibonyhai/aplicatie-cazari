using System.ComponentModel.DataAnnotations;

namespace Angula2BaseStructure.Models.ViewModels.Auth
{
    public class LoginCredentialsViewModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
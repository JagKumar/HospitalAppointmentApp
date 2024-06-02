using System.ComponentModel.DataAnnotations;

namespace HospitalApp.Server.Models
{
    public class Appointment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string PetName { get; set; }
        [Required]
        public string PetOwnersName { get; set; }
        [Required]
        public string PetOwnersAddress { get; set; }
        [Required]
        public string PetOwnersContactNo { get; set; }
        [Required]
        public DateTime DateofAppointment { get; set; }
        public string ReasonforAppointment { get; set; }
    }
}

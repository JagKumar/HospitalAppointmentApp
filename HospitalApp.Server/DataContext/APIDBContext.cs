using HospitalApp.Models;
using HospitalApp.Server.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using static System.Reflection.Metadata.BlobBuilder;

namespace HospitalApp.Server.DataContext
{
   
    public class APIDBContext : IdentityDbContext<ApplicationUser>
    {
        //public APIDBContext()
        //{

        //}
        public APIDBContext(DbContextOptions<APIDBContext> options)
        : base(options)
        {

        }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Appointment> Appointment { get; set; }
    }
}

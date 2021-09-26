using _2.Dominio.Models;
using Microsoft.EntityFrameworkCore;

namespace _3.Repositorio.Data
{
    public class DataContext:DbContext
    {

                                                    //Dessa forma estou passando o parametro para minha classe
                                                    //pai, referenciada como "base" em c#
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            //Minha classe pai (DbContext) precisa receber um parametro de options, logo preciso como classe
            //filha enviar isso a ele, esse options define qual o builder (mysql,sqlite,sqlserver...) sera usado
      
        }

        public DbSet<Evento> Eventos { get; set; }

        
    }
}
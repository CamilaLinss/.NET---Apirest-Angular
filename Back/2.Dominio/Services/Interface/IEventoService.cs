using System.Collections.Generic;
using _2.Dominio.Models;

namespace _2.Dominio.Services.Interface
{
    public interface IEventoService
    {

        void cadastrar(Evento cliente);

        List<Evento> buscaEventos();
         
    }
}
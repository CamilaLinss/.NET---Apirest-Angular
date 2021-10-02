using System.Collections.Generic;
using _2.Dominio.Models;

namespace _2.Dominio.Interface
{
    public interface IEventoRepository
    {

        void cadastrar(Evento cliente);

        List<Evento> buscaEventos();
         
    }
}
using System.Collections.Generic;
using System.Linq;
using _2.Dominio.Models;
using _3.Repositorio.Data.DataJsonMock.Base;

namespace _3.Repositorio.Data.DataJsonMock.Repositorios
{

    //MOCK DE BANCO DE DADOS COM JSON
    public class DataClienteMock : EntityMockBase<Evento>
    {

  
        public DataClienteMock(string tabela) : base(tabela){}

    
        public void PostEventoMock(Evento evento){

            List<Evento> items = registrosTabelaMock();

            if(items.Any()){

                var last = items[items.Count - 1].EventoId + 1;

                evento.EventoId = last;

            }else{
                evento.EventoId = 1;
            }

            items.Add(evento);

            saveChangesMock(items);

        }


        public void PutEventoAtualizaMock(int id, Evento eventoAtualizado){

            List<Evento> items = registrosTabelaMock();

            Evento evento = items.First(e => e.EventoId == id);

            evento.Local = eventoAtualizado.Local;
            evento.Lote = eventoAtualizado.Local;
            evento.QtdPessoas = eventoAtualizado.QtdPessoas;
            evento.Tema = eventoAtualizado.Tema;
            evento.ImagemURL = eventoAtualizado.DataEvento;

            saveChangesMock(items);

        }

        public List<Evento> GetEventos(){

            List<Evento> items = registrosTabelaMock();

            return items;
        }

        public Evento GetEvento(int id){

            List<Evento> items = registrosTabelaMock();

            Evento evento = items.First(e => e.EventoId == id);

            return evento;
        }



        public Evento DeleteEvento(int id){

            List<Evento> items = registrosTabelaMock();

            Evento evento = items.First(e => e.EventoId == id);

            items.RemoveAll(x => x.EventoId == evento.EventoId);

            saveChangesMock(items);

            return evento;
        }


    }
}
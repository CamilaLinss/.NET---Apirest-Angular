using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace _1.Apresentacao.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public EventoController()
        {
            
        }


        [HttpGet]
        public string Busca(){

            return "Ola mundo";
        }
        
        
        [HttpPost]
        public string Cadastra(int id){

            return $"Cadastrando registro";

        }
    

        [HttpPut("{id}")]
        public string Atualiza(int id){

            return $"Atualizando registro com id {id}";

        }


        [HttpDelete("{id}")]
        public string Deleta(int id){

            return $"Deletando registro com id {id}";

        }



        
    }


}
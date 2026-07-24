from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process, LLM
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerpApiGoogleSearchTool

load_dotenv()

@CrewBase
class ChatAssist():

    agents_config = "../config/agents.yaml"
    tasks_config = "../config/chat_tasks.yaml"

    @agent
    def thinker(self) -> Agent:
        return Agent(
            config = self.agents_config['chat_agent'],
            tools = [SerpApiGoogleSearchTool()],
            verbose = True
        )
    
    @task
    def replyer(self) -> Task:
        return Task(
            config = self.tasks_config['chat_task'],
            agent = self.thinker()
        )
    
    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=[self.thinker()],
            tasks=[self.replyer()]
        )
    
# chat_crew = ChatAssist()
# def run_crew(msg: str) -> str:
#     result = chat_crew.crew().kickoff(inputs={"user_message": msg})

#     return str(result)
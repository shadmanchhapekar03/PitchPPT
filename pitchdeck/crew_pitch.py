from ppt_tool import pitchDeck
from dotenv import load_dotenv
from crewai import Agent, Task, Crew
from crewai.project import CrewBase, agent, crew, task
load_dotenv()

@CrewBase
class pptAssist():
    
    agents_config = "../config/agents.yaml"
    tasks_config = "../config/pitch_tasks.yaml"

    @agent
    def ppt_agent(self) -> Agent:
        return Agent(
            config = self.agents_config['ppt_agent'],
            tools = [pitchDeck()],
            verbose = True
        )
    
    @task
    def ppt_task(self) -> Task:
        return Task(
            config = self.tasks_config['ppt_task'],
            agent = self.ppt_agent()
        )
    
    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=[self.ppt_agent()],
            tasks=[self.ppt_task()],
            verbose=True
        )


if __name__ == "__main__":
    ppt = pptAssist()
    print("generating the output")
    ppt.crew().kickoff(inputs={"user_message": "software based solution for industries"})
    print("file created succefully")
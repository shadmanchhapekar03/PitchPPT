from dotenv import load_dotenv
from crewai import LLM, Agent, Task, Crew

load_dotenv()

llm = LLM(
    model="gemini-2.5-flash",
    temperature=0.1
)

# print(llm.call("What is Deep Learning?"))

email_agent = Agent(
    role= "Email Assistant Agent",
    goal= "Improve the email and make them sound proffesional and make it very clear",
    backstory= "proffesional exerienced email writer which write an email like a highly experienced one",
    verbose= True,
    llm= llm
)

orig_email = """
hey team, just want to let you know that our work is done alhamdullillah but there is some changes require,
so u have to work properly and consistantly to make the work more powerfull ok and we have created the pro also which will be 
almost for the VIP persons ok so make it wonderfull the proeject. thanks Shadman
"""

email_task = Task(
    description=f"""
    Take the following email and rewrite it which looks proffesional and polished version .
    Expand abbrevviations '''{orig_email}'''
                """,
    agent=email_agent,
    expected_output="give me the email in proper format written in a proffessional way and the content should also be professinal"
)

crew = Crew(
    agents=[email_agent],
    tasks=[email_task],
    verbose=True,
)

result = crew.kickoff()

print(result)
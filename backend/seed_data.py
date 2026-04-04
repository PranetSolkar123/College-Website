"""
Run with: python seed_data.py (from the project root with venv active)
"""
import os, sys, django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vcet_backend.settings')
django.setup()

# Auto-run migrations so all tables exist before seeding
from django.core.management import call_command
print("Running migrations...")
call_command('migrate', '--run-syncdb', verbosity=0)
print("Migrations done.\n")

from departments.models import Department
from faculty.models import Faculty
from labs.models import Lab
from placements.models import Placement, Recruiter
from achievements.models import Achievement
from events.models import Event
from testimonials.models import Testimonial
from notices.models import Notice
from datetime import date

print("Seeding departments...")
depts_data = [
    dict(name="Computer Engineering", code="CE", established_year=1994, intake=120,
         is_nba_accredited=True, tagline="Code the Future",
         description="The Department of Computer Engineering has been a pioneer in technical education since 1994. With state-of-the-art labs and industry-aligned curriculum, we nurture engineers ready for the digital age.",
         vision="To be a centre of excellence in computing education and research that shapes innovation-driven engineers.",
         mission="M1: Provide strong foundations in computing fundamentals.|M2: Foster research and entrepreneurial mindset.|M3: Develop ethical, globally competent engineers.",
         head_of_dept="Dr. A. R. Pathak", color="#1A3C6E", icon="💻"),
    dict(name="CS (Data Science)", code="CSD", established_year=2020, intake=60,
         is_nba_accredited=False, tagline="Turning Data into Decisions",
         description="A cutting-edge program integrating computer science with advanced data analytics, machine learning and AI techniques to solve real-world problems.",
         vision="To lead in data-centric education and produce skilled data scientists who drive industry innovation.",
         mission="M1: Impart expertise in data analytics and ML.|M2: Encourage interdisciplinary research.|M3: Bridge academia-industry gap.",
         head_of_dept="Dr. S. K. Mishra", color="#2D5A8E", icon="📊"),
    dict(name="Information Technology", code="IT", established_year=2001, intake=120,
         is_nba_accredited=True, tagline="Connecting the World",
         description="The IT department focuses on developing professionals who can design, implement and manage complex IT systems.",
         vision="To be a globally recognised IT department producing competent and innovative IT professionals.",
         mission="M1: Build strong IT fundamentals.|M2: Integrate industry practices into curriculum.|M3: Cultivate lifelong learning.",
         head_of_dept="Dr. M. V. Joshi", color="#1B5E8A", icon="🌐"),
    dict(name="AI & Data Science", code="AIDS", established_year=2021, intake=60,
         is_nba_accredited=False, tagline="Intelligence Amplified",
         description="Dedicated to exploring Artificial Intelligence, Deep Learning, NLP and their applications across industries.",
         vision="To be a premier AI education hub producing future-ready AI engineers.",
         mission="M1: Instil deep knowledge of AI fundamentals.|M2: Drive applied AI research.|M3: Promote ethical AI development.",
         head_of_dept="Prof. R. D. Sharma", color="#0F4C75", icon="🤖"),
    dict(name="Mechanical Engineering", code="MECH", established_year=1994, intake=60,
         is_nba_accredited=True, tagline="Design. Build. Innovate.",
         description="A comprehensive program covering thermodynamics, manufacturing, design and robotics, preparing engineers for core industries.",
         vision="To nurture creative mechanical engineers who contribute to sustainable industrial growth.",
         mission="M1: Develop core mechanical skills.|M2: Promote design thinking.|M3: Foster industry partnerships.",
         head_of_dept="Dr. P. K. Nair", color="#7B3F00", icon="⚙️"),
    dict(name="Electronics & Telecom", code="EXTC", established_year=1994, intake=60,
         is_nba_accredited=True, tagline="Signal. Connect. Innovate.",
         description="Covering electronics, communication systems, VLSI and embedded systems, the EXTC department drives communication technology forward.",
         vision="To excel in electronics and communication education for a connected world.",
         mission="M1: Deliver robust electronics fundamentals.|M2: Expose students to emerging communication tech.|M3: Encourage R&D culture.",
         head_of_dept="Dr. S. B. Kadam", color="#1B5E20", icon="📡"),
    dict(name="Civil Engineering", code="CIVIL", established_year=1994, intake=60,
         is_nba_accredited=False, tagline="Building Tomorrow's World",
         description="From structural design to sustainable construction, the Civil department trains engineers who shape infrastructure.",
         vision="To produce civil engineers who build sustainable infrastructure for society.",
         mission="M1: Impart fundamental civil engineering knowledge.|M2: Foster sustainable design principles.|M3: Encourage field experience.",
         head_of_dept="Prof. A. S. More", color="#37474F", icon="🏗️"),
    dict(name="First Year Engineering", code="FE", established_year=1994, intake=480,
         is_nba_accredited=False, tagline="The Foundation Year",
         description="The FYE department provides a strong multi-disciplinary foundation for all engineering branches.",
         vision="To build a strong, motivated foundation for engineering excellence.",
         mission="M1: Develop core science and maths skills.|M2: Introduce engineering practices.|M3: Cultivate professional values.",
         head_of_dept="Dr. N. R. Patil", color="#6A1B9A", icon="🎓"),
]
Department.objects.all().delete()
depts = {}
for d in depts_data:
    obj = Department.objects.create(**d)
    depts[d['code']] = obj
print(f"  Created {len(depts)} departments")

print("Seeding faculty...")
Faculty.objects.all().delete()
faculty_data = [
    dict(name="Dr. A. R. Pathak", designation="Professor & Head", qualification="Ph.D. (Computer Science)", experience="22 Years", research_area="Machine Learning, Cloud Computing", department=depts['CE'], is_hod=True, email="ar.pathak@vcet.edu.in"),
    dict(name="Prof. S. V. Kulkarni", designation="Associate Professor", qualification="M.E. (Computer Engineering)", experience="14 Years", research_area="Data Structures, Algorithms", department=depts['CE'], email="sv.kulkarni@vcet.edu.in"),
    dict(name="Prof. R. T. Jain", designation="Assistant Professor", qualification="M.Tech (CSE)", experience="8 Years", research_area="Web Technologies, IoT", department=depts['CE']),
    dict(name="Dr. S. K. Mishra", designation="Professor & Head", qualification="Ph.D. (Data Science)", experience="18 Years", research_area="Big Data, Analytics", department=depts['CSD'], is_hod=True, email="sk.mishra@vcet.edu.in"),
    dict(name="Dr. M. V. Joshi", designation="Professor & Head", qualification="Ph.D. (IT)", experience="20 Years", research_area="Network Security, Cloud", department=depts['IT'], is_hod=True, email="mv.joshi@vcet.edu.in"),
    dict(name="Prof. R. D. Sharma", designation="Head of Department", qualification="M.Tech (AI)", experience="12 Years", research_area="Deep Learning, NLP", department=depts['AIDS'], is_hod=True),
    dict(name="Dr. P. K. Nair", designation="Professor & Head", qualification="Ph.D. (Mechanical)", experience="25 Years", research_area="Thermal Engineering, Robotics", department=depts['MECH'], is_hod=True),
    dict(name="Dr. S. B. Kadam", designation="Professor & Head", qualification="Ph.D. (Electronics)", experience="19 Years", research_area="VLSI Design, Embedded Systems", department=depts['EXTC'], is_hod=True),
]
for f in faculty_data:
    Faculty.objects.create(**f)
print(f"  Created {len(faculty_data)} faculty")

print("Seeding labs...")
Lab.objects.all().delete()
labs_data = [
    dict(name="Advanced Computing Lab", description="Equipped with 60 high-performance workstations for OS, networks and advanced programming courses.", department=depts['CE'], capacity=60, features="60 workstations, High-speed internet, Linux/Windows dual boot, Projector"),
    dict(name="AI & ML Lab", description="Dedicated GPU-enabled lab for deep learning, computer vision and NLP experiments.", department=depts['CE'], capacity=30, is_industry_sponsored=True, features="GPU servers, Python, TensorFlow, PyTorch"),
    dict(name="Data Analytics Lab", description="A data science lab with R, Python and specialised analytics tools for CSD students.", department=depts['CSD'], capacity=40, features="R Studio, Jupyter, Tableau, MATLAB"),
    dict(name="Cloud Computing Lab", description="IBM-sponsored cloud lab with access to AWS, Azure and GCP platforms.", department=depts['IT'], capacity=50, is_industry_sponsored=True, features="AWS, Azure, GCP access, Docker, Kubernetes"),
    dict(name="Robotics & Automation Lab", description="State-of-the-art lab with industrial robots and PLC systems for hands-on automation learning.", department=depts['MECH'], capacity=30, is_industry_sponsored=True, features="Industrial robots, CNC machine, 3D printer, PLC"),
    dict(name="VLSI Design Lab", description="Equipped with EDA tools like Cadence and Synopsys for IC and VLSI design.", department=depts['EXTC'], capacity=40, features="Cadence, Synopsys, FPGA boards, Oscilloscopes"),
]
for l in labs_data:
    Lab.objects.create(**l)
print(f"  Created {len(labs_data)} labs")

print("Seeding placements...")
Placement.objects.all().delete()
placement_data = [
    dict(year="2019-20", students_placed=180, highest_package="12.00", average_package="3.80"),
    dict(year="2020-21", students_placed=210, highest_package="14.00", average_package="4.10"),
    dict(year="2021-22", students_placed=265, highest_package="16.50", average_package="4.80"),
    dict(year="2022-23", students_placed=290, highest_package="18.00", average_package="5.00"),
    dict(year="2023-24", students_placed=320, highest_package="21.00", average_package="5.20"),
]
for p in placement_data:
    Placement.objects.create(**p)
recruiter_names = ["TCS", "Infosys", "Wipro", "HCL Technologies", "Cognizant", "Capgemini", "Accenture", "Tech Mahindra", "L&T Infotech", "Persistent Systems", "Mphasis", "Oracle", "IBM", "Hexaware", "KPIT Technologies"]
Recruiter.objects.all().delete()
for r in recruiter_names:
    Recruiter.objects.create(name=r)
print(f"  Created {len(placement_data)} placement records, {len(recruiter_names)} recruiters")

print("Seeding achievements...")
Achievement.objects.all().delete()
achievements_data = [
    dict(title="National Hackathon Champions 2024", description="Team of 4 CE students won 1st place at Smart India Hackathon 2024, competing against 10,000+ teams nationwide.", tag="Tech", department=depts['CE'], date=date(2024, 12, 15)),
    dict(title="Best Paper Award at ICCSP 2024", description="Research paper on Edge AI by EXTC faculty received Best Paper Award at the International Conference.", tag="Research", department=depts['EXTC'], date=date(2024, 10, 8)),
    dict(title="₹21 LPA Highest Package Record", description="CE student Priya Sharma received a record package of ₹21 LPA from a leading MNC, setting a new placement high.", tag="Placements", department=depts['CE'], date=date(2024, 4, 20)),
    dict(title="NBA Accreditation Renewed for 5 Years", description="CE, IT, MECH and EXTC departments received NBA accreditation renewed for another 5 years.", tag="Innovation", date=date(2023, 9, 1)),
    dict(title="National Robotics Competition Runners-Up", description="MECH-EXTC joint team secured 2nd place at the National Robotics Championship held at IIT Bombay.", tag="Tech", department=depts['MECH'], date=date(2024, 2, 10)),
    dict(title="DST-Funded Research Project", description="IT department secured a ₹25 Lakh research grant from DST for a cybersecurity project.", tag="Funding", department=depts['IT'], date=date(2023, 11, 5)),
]
for a in achievements_data:
    Achievement.objects.create(**a)
print(f"  Created {len(achievements_data)} achievements")

print("Seeding events...")
Event.objects.all().delete()
events_data = [
    dict(title="TechFest 2026 — Annual Technical Festival", date=date(2026, 4, 20), venue="VCET Main Campus", event_type="Technical", link="https://vcet.edu.in/techfest", is_upcoming=True),
    dict(title="IEEE Workshop on Generative AI", date=date(2026, 4, 15), venue="Seminar Hall, 3rd Floor", event_type="Workshop", is_upcoming=True),
    dict(title="Campus Recruitment Drive — TCS & Infosys", date=date(2026, 4, 25), venue="Placement Cell", event_type="Other", is_upcoming=True),
    dict(title="National Level Paper Presentation — NCET 2026", date=date(2026, 5, 5), venue="Auditorium", event_type="Seminar", is_upcoming=True),
]
for e in events_data:
    Event.objects.create(**e)
print(f"  Created {len(events_data)} events")

print("Seeding testimonials...")
Testimonial.objects.all().delete()
testimonials_data = [
    dict(name="Priya Sharma", role="Software Engineer @ Google", text="VCET gave me the technical foundation and confidence to crack interviews at top MNCs. The faculty's dedication and the quality of labs are unmatched.", batch_year=2022, is_featured=True),
    dict(name="Rahul Mehta", role="Data Scientist @ Flipkart", text="The AI & Data Science program at VCET is truly world-class. The hands-on projects and industry exposure helped me land my dream job.", batch_year=2023, is_featured=True),
    dict(name="Sneha Patil", role="Product Manager @ Zomato", text="VCET shaped me into a problem-solver. The diverse curriculum, combined with co-curricular activities, prepared me for a well-rounded career.", batch_year=2021, is_featured=True),
]
for t in testimonials_data:
    Testimonial.objects.create(**t)
print(f"  Created {len(testimonials_data)} testimonials")

print("Seeding notices...")
Notice.objects.all().delete()
notices_data = [
    dict(title="Admission Enquiry for B.E. Courses A.Y. 2026-27 — Apply Now", link="https://forms.gle/uh7sZS5JLzn2RecG7", category="Admission"),
    dict(title="M.E. Admission Enquiry Form 2026-27 — Open for Applications", link="#", category="Admission"),
    dict(title="IEEE IC3ET 2026 International Conference — Submit Your Papers", link="#", category="Event"),
    dict(title="End Semester Examinations Schedule Released", link="#", category="Exam"),
    dict(title="Campus Placement Drive — TCS, Infosys, Wipro visiting on April 25", link="#", category="Placement"),
]
for n in notices_data:
    Notice.objects.create(**n)
print(f"  Created {len(notices_data)} notices")

print("\n✅ Seed data loaded successfully!")

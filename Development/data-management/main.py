    
from sqlalchemy import Column, String, DateTime, Integer ,create_engine
from sqlalchemy.orm import declarative_base
from datetime import datetime
import os


BASE_DIR=os.path.dirname(os.path.realpath(__file__))
connection_string="sqlite:///"+os.path.join(BASE_DIR,"site.db")
Base = declarative_base()

engine=create_engine(connection_string,echo=True)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String(25), nullable=False, unique=True)
    email = Column(String(80), unique=True, nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email}, date_created={self.date_created})>"

new_user = User(username="jonathan", email="jonathan@student.com")
print(new_user)


import "./components/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

import HeaderTop from "./components/header";
import Footer from "./components/footer";
//Teacher Routes
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import TeachersClass from "./components/teacher/teachersClass";
import TeacherProfile from "./components/teacher/teacherprofile";
import AddAssignment from "./components/teacher/addAssignment/addAssignment";
import AddQuiz from "./components/teacher/addQuiz/addQuiz";
import THome from "./components/teacher/teacherHome/teacherHome";
import TMessage from "./components/teacher/tMessage/tMessage";
import TDashboard from "./components/teacher/teacherDashboard";

//Student Routes
import StudentsPage from "./components/student/studentsClass";
import StudentLogin from "./components/Auth/StudentLogin";
import StudentRegister from "./components/Auth/StudentRegister";
import DowAssignment from "./components/student/dowAssignment/dowAssignment";
import DowQuiz from "./components/student/dowQuiz/dowQuiz";
import SDashboard from "./components/student/studentDashboard";
import SMessage from "./components/student/sMessage/sMessage";
import SHome from "./components/student/studentHome/studentHome";
import StudentProfile from "./components/student/studentProfile";

export default function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={TeacherProfile} />
          <Route exact path="/" component={TeachersClass} />
          <Route exact path="/tAssignment" component={AddAssignment} />
          <Route exact path="/tQuiz" component={AddQuiz} />
          <Route exact path="/tHome" component={THome} />
          <Route exact path="/tMessage" component={TMessage} />
          <Route exact path="/tdashboard" component={TDashboard} />

          <Route exact path="/slogin" component={StudentLogin} />
          <Route exact path="/sregister" component={StudentRegister} />
          <Route exact path="/student" component={StudentsPage} />
          <Route exact path="/sAssignment" component={DowAssignment} />
          <Route exact path="/sQuiz" component={DowQuiz} />
          <Route exact path="/sdashboard" component={SDashboard} />
          <Route exact path="/sMessage" component={SMessage} />
          <Route exact path="/sHome" component={SHome} />
          <Route exact path="/sprofile" component={StudentProfile} />
        </Switch>
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

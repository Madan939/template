import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
   <>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

<Link to="/" className="brand-link">
  <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
    style={{ opacity: " .8" }} />
  <span className="brand-text font-weight-light">AdminLTE 3</span>
</Link>

<div className="sidebar">

  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" />
    </div>
    <div className="info">
      <Link to="#" className="d-block">Alexander Pierce</Link>
    </div>
  </div>

  <div className="form-inline">
    <div className="input-group" data-widget="sidebar-search">
      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-sidebar">
          <i className="fas fa-search fa-fw"></i>
        </button>
      </div>
    </div>
  </div>

  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

      <li className="nav-item menu-open">
        <Link to="#" className="nav-link active">
          <i className="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Dashboard
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="/dashboard1" className="nav-link active">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard v1</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard2" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard v2</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Dashboard v3</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="/widgets" className="nav-link">
          <i className="nav-icon fas fa-th"></i>
          <p>
            Widgets
            <span className="right badge badge-danger">New</span>
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/studentform" className="nav-link">Student Form </Link>
      </li>
      <li className="nav-item">
        <Link to="/studentlist" className="nav-link">Student List </Link>
      </li>
      <li className="nav-item">
        <Link to="/courses" className="nav-link">Course </Link>
      </li>
      {/* <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-copy"></i>
          <p>
            Layout Options
            <i className="fas fa-angle-left right"></i>
            <span className="badge badge-info right">6</span>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/layout/top-nav.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Top Navigation</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/top-nav-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Top Navigation + Sidebar</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/boxed.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Boxed</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/fixed-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Fixed Sidebar</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/fixed-sidebar-custom.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Fixed Sidebar <small>+ Custom Area</small></p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/fixed-topnav.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Fixed Navbar</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/fixed-footer.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Fixed Footer</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/layout/collapsed-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Collapsed Sidebar</p>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-chart-pie"></i>
          <p>
            Charts
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/charts/chartjs.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>ChartJS</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/charts/flot.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Flot</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/charts/inline.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Inline</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/charts/uplot.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>uPlot</p>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-tree"></i>
          <p>
            UI Elements
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/UI/general.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>General</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/icons.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Icons</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/buttons.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Buttons</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/sliders.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Sliders</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/modals.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Modals & Alerts</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/navbar.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Navbar & Tabs</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/timeline.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Timeline</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/UI/ribbons.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Ribbons</p>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-edit"></i>
          <p>
            Forms
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/forms/general.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>General Elements</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/forms/advanced.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Advanced Elements</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/forms/editors.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Editors</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/forms/validation.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Validation</p>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-table"></i>
          <p>
            Tables
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/tables/simple.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Simple Tables</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/tables/data.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>DataTables</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/tables/jsgrid.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>jsGrid</p>
            </Link>
          </li>
        </ul>
      </li> */}
      <li className="nav-header">EXAMPLES</li>
      <li className="nav-item">
        <Link to="pages/calendar.html" className="nav-link">
          <i className="nav-icon far fa-calendar-alt"></i>
          <p>
            Calendar
            <span className="badge badge-info right">2</span>
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="pages/gallery.html" className="nav-link">
          <i className="nav-icon far fa-image"></i>
          <p>
            Gallery
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="pages/kanban.html" className="nav-link">
          <i className="nav-icon fas fa-columns"></i>
          <p>
            Kanban Board
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon far fa-envelope"></i>
          <p>
            Mailbox
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/mailbox/mailbox.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Inbox</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/mailbox/compose.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Compose</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/mailbox/read-mail.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Read</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-book"></i>
          <p>
            Pages
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/examples/invoice.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Invoice</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/profile.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Profile</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/e-commerce.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>E-commerce</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/projects.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Projects</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/project-add.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Project Add</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/project-edit.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Project Edit</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/project-detail.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Project Detail</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/contacts.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Contacts</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/faq.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>FAQ</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/contact-us.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Contact us</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon far fa-plus-square"></i>
          <p>
            Extras
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>
                Login & Register v1
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="pages/examples/login.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Login v1</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/register.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Register v1</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/forgot-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Forgot Password v1</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/recover-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Recover Password v1</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>
                Login & Register v2
                <i className="fas fa-angle-left right"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="pages/examples/login-v2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Login v2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/register-v2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Register v2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/forgot-password-v2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Forgot Password v2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/examples/recover-password-v2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Recover Password v2</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/lockscreen.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Lockscreen</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/legacy-user-menu.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Legacy User Menu</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/language-menu.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Language Menu</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/404.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Error 404</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/500.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Error 500</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/pace.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Pace</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/examples/blank.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Blank Page</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="starter.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Starter Page</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-search"></i>
          <p>
            Search
            <i className="fas fa-angle-left right"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="pages/search/simple.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Simple Search</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pages/search/enhanced.html" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Enhanced</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-header">MISCELLANEOUS</li>
      <li className="nav-item">
        <Link to="iframe.html" className="nav-link">
          <i className="nav-icon fas fa-ellipsis-h"></i>
          <p>Tabbed IFrame Plugin</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="https://adminlte.io/docs/3.1/" className="nav-link">
          <i className="nav-icon fas fa-file"></i>
          <p>Documentation</p>
        </Link>
      </li>
      <li className="nav-header">MULTI LEVEL EXAMPLE</li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="fas fa-circle nav-icon"></i>
          <p>Level 1</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon fas fa-circle"></i>
          <p>
            Level 1
            <i className="right fas fa-angle-left"></i>
          </p>
        </Link>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Level 2</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>
                Level 2
                <i className="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="far fa-dot-circle nav-icon"></i>
                  <p>Level 3</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="far fa-dot-circle nav-icon"></i>
                  <p>Level 3</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="far fa-dot-circle nav-icon"></i>
                  <p>Level 3</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>Level 2</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="fas fa-circle nav-icon"></i>
          <p>Level 1</p>
        </Link>
      </li>
      <li className="nav-header">LABELS</li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon far fa-circle text-danger"></i>
          <p className="text">Important</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon far fa-circle text-warning"></i>
          <p>Warning</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav-link">
          <i className="nav-icon far fa-circle text-info"></i>
          <p>Informational</p>
        </Link>
      </li>
    </ul>
  </nav>

</div>

</aside>
   </>
  )
}

export default Aside
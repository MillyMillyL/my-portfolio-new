import useProjects from '../hooks/useProjects';
import Menus from '../components/Menus';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import Modal from '../components/Modal';

function ProjectList() {
  const { projectss, isLoading, isError, projectsError } = useProjects();

  if (isLoading) {
    return 'Loading';
  }
  if (isError) {
    return projectsError.message;
  }

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full border border-gray-300 bg-white shadow-md">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Title</th>
            <th className="border-b px-4 py-2 text-left">Description</th>
            <th className="border-b px-4 py-2 text-left">Github</th>
            <th className="border-b px-4 py-2 text-left">Netlify</th>
            <th className="border-b px-4 py-2 text-left">Tags</th>
          </tr>
        </thead>
        <tbody>
          {projectss.map((pro) => (
            <tr key={pro.id}>
              <td className="border-b px-4 py-2">{pro.title}</td>
              <td className="border-b px-4 py-2">{pro.description}</td>
              <td className="border-b px-4 py-2">{pro.github}</td>
              <td className="border-b px-4 py-2">{pro.netlify}</td>
              <td className="border-b px-4 py-2">
                <Modal>
                  <Menus>
                    <Menus.Menu>
                      <Menus.Toggle id={pro.id} />
                      <Menus.List id={pro.id}>
                        <Menus.Button icon={<HiOutlineSquare2Stack />}>
                          Duplicate
                        </Menus.Button>

                        <Modal.Open opens="edit">
                          <Menus.Button icon={<HiOutlinePencilAlt />}>
                            Edit
                          </Menus.Button>
                        </Modal.Open>

                        <Modal.Open opens="delete">
                          <Menus.Button icon={<HiOutlineTrash />}>
                            Delete
                          </Menus.Button>
                        </Modal.Open>
                      </Menus.List>
                      <Modal.Window name="edit">
                        <span>Edit Project</span>
                      </Modal.Window>
                      <Modal.Window name="delete">
                        <span>Delete Project</span>
                      </Modal.Window>
                    </Menus.Menu>
                  </Menus>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;

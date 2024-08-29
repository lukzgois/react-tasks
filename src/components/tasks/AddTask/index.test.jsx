import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import AddTask from "@components/tasks/AddTask"

describe('Component elements', () => {
  it('has a label', ()  => {
    render(<AddTask />)

    expect(screen.getByText('What do you plan to do next?')).toBeTruthy()
  })

  it('has an input element', () => {
    render(<AddTask />)

    expect(screen.getByPlaceholderText('Buy new shoes...')).toBeTruthy()
  })

  it('has a submit button', () => {
    render(<AddTask />)

    expect(screen.getByText('Add Task')).toBeTruthy()
  })
})

describe('Component events', () => {
  describe('onTaskAdded', () => {
    const onTaskAdded = vi.fn()

    beforeEach(async () => {
      const user = userEvent.setup()
      render(<AddTask onTaskAdded={onTaskAdded} />)

      const input = screen.getByPlaceholderText('Buy new shoes...')
      const submit = screen.getByText('Add Task')

      await user.type(input, "Take out the trash")
      await user.click(submit)
    })

    it('triggers the event when the user submits the form', async () => {
      expect(onTaskAdded).toHaveBeenCalledWith('Take out the trash')
    })

    it('clears the input after the user submits the form', async () => {
      const input = screen.getByPlaceholderText('Buy new shoes...')
      expect(input.value).toBe('')
    })

    it('focus the input after the user submits the form', async () => {
      const input = screen.getByPlaceholderText('Buy new shoes...')
      expect(input).toHaveFocus()
    })
  })
})

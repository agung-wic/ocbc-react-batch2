import { render, screen, waitFor } from "@testing-library/react"
import Users from "./pages/Users"

test('Render halaman Users dengan benar', async () => {
    render(<Users />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Back To Home')

    const user = await waitFor(() => {
        return screen.findByText('Leanne Graham')
    }, { timeout: 4000 })
    expect(user).toBeInTheDocument()
})
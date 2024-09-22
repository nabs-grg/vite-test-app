import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

export function LearnMore() {
  return (
    <div>
      <Link to="/">
        <Button>Return to donation</Button>
      </Link>
      <h2>Mission</h2>
      <p>
        Oxfam believes poverty isn’t inevitable. It’s an injustice that can be overcome. We are volunteers, fundraisers,
        shoppers, campaigners, water engineers and more. Join us.
      </p>
    </div>
  )
}

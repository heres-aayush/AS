import { NextResponse } from 'next/server'
import { PrismaClient, UserType} from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 })
  }
}

// POST new user
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, phone, address, userType, password } = body

    // Validate required fields
    if (!email || !phone || !address || !userType || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        phone,
        address,
        userType: userType as UserType,
        password: hashedPassword,
      },
    })

    // Don't return password in response
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error: any) {
    console.error('Registration error:', error)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Error creating user' },
      { status: 500 }
    )
  }
}
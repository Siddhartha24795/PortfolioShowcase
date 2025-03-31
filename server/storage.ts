import { users, type User, type InsertUser, VisitorCounter, InsertReferral, Referral } from "@shared/schema";
import { v4 as uuidv4 } from 'uuid';

// Interface for all CRUD operations
export interface IStorage {
  // User methods (kept for reference)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Visitor counter methods
  getVisitorCount(): Promise<{ count: number; lastUpdated: string }>;
  incrementVisitorCount(): Promise<{ count: number; lastUpdated: string }>;
  
  // Referral methods
  createReferral(referral: InsertReferral): Promise<{ id: number }>;
  getReferral(id: number): Promise<Referral | undefined>;
  listReferrals(): Promise<Referral[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private visitorCount: number;
  private visitorLastUpdated: Date;
  private referrals: Map<number, Referral>;
  currentId: number;
  currentReferralId: number;

  constructor() {
    this.users = new Map();
    this.visitorCount = 0;
    this.visitorLastUpdated = new Date();
    this.referrals = new Map();
    this.currentId = 1;
    this.currentReferralId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Visitor counter methods
  async getVisitorCount(): Promise<{ count: number; lastUpdated: string }> {
    return {
      count: this.visitorCount,
      lastUpdated: this.visitorLastUpdated.toISOString()
    };
  }
  
  async incrementVisitorCount(): Promise<{ count: number; lastUpdated: string }> {
    this.visitorCount += 1;
    this.visitorLastUpdated = new Date();
    return {
      count: this.visitorCount,
      lastUpdated: this.visitorLastUpdated.toISOString()
    };
  }
  
  // Referral methods
  async createReferral(referral: InsertReferral): Promise<{ id: number }> {
    const id = this.currentReferralId++;
    const newReferral: Referral = {
      ...referral,
      id,
      processed: false
    };
    this.referrals.set(id, newReferral);
    return { id };
  }
  
  async getReferral(id: number): Promise<Referral | undefined> {
    return this.referrals.get(id);
  }
  
  async listReferrals(): Promise<Referral[]> {
    return Array.from(this.referrals.values());
  }
}

export const storage = new MemStorage();
